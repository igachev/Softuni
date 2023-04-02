module.exports = (req,res,next) => {
    console.log(`requested url: ${req.url} with method: ${req.method}`);
    next()
}