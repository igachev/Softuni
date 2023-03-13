const homeTemplate = () => `
<h1>Home</h1>
<p>Lorem lo lor leele lelele lelel 123</p>
`

const articlesTemplate = () => `
<h1>Articles</h1>
<p>Lorem lo lor leele lelele lelel 123</p>
<p>Lorem lo lor leele lelele lelel 123</p>
<p>Lorem lo lor leele lelele lelel 123</p>
<p>Lorem lo lor leele lelele lelel 123</p>
`

const aboutTemplate = () => `
<h1>About</h1>
<p>Lorem lo lor leele lelele lelel 123</p>
`

const routes = {
    '#home':homeTemplate,
    '#articles':articlesTemplate,
    '#about':aboutTemplate,
}

const root = document.getElementById('root')

window.addEventListener('hashchange',(e) => {
    let template = routes[location.hash]
    root.innerHTML = template();
})