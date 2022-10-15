function extractEmails(input) {
let pattern = /(^|(?<=\s))(?<user>[a-zA-Z0-9]+([\.\-\_]?)[a-zA-Z0-9]+)@(?<host>[\-[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?)/g
let validEmail = pattern.exec(input)
while(validEmail !== null) {
    console.log(validEmail[0]);
    validEmail = pattern.exec(input)
}

}

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')