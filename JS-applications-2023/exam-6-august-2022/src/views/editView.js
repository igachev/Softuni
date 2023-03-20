import { html } from '../../node_modules/lit-html/lit-html.js'
import * as offerService from '../services/offerService.js'

const editTemplate = (submitHandler,offer) => html `
 <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                .value = ${offer.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                .value = ${offer.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                .value = ${offer.category}
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                .value = ${offer.description}
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                .value = ${offer.requirements}
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                .value = ${offer.salary}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const title = formData.get('title')
        const imageUrl = formData.get('imageUrl')
        const category = formData.get('category')
        const description = formData.get('description')
        const requirements = formData.get('requirements')
        const salary = formData.get('salary')

        if(title === '' || imageUrl === '' || category === '' ||
        description === '' || requirements === '' ||
        salary === '') {
            alert('All fields are required!')
            return;
        }

        const data = {
            title,
            imageUrl, 
            category, 
            description, 
            requirements, 
            salary
        }

        offerService.edit(ctx.params.offerId,data)
        .then(() => {
            ctx.page.redirect(`/details/${ctx.params.offerId}`)
        })
    }

    offerService.getOne(ctx.params.offerId)
    .then((offer) => {
        ctx.render(editTemplate(submitHandler,offer))
    })
}