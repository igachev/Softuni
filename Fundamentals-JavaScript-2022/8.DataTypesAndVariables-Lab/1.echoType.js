function echo(input) {
console.log(typeof input);
if(typeof input === 'string' || typeof input === 'number') {
    console.log(input);
}
else {
    console.log('Parameter is not suitable for printing');
}
}

echo('Hello, Javascript!')
echo(undefined)
echo(18)
echo(null)