const asyncHandler = (func) = async(req,res,next) => {
    try {
        await func(req,res,next);
    } catch (error) {
        res.status(error.status || 500).json({
            status: "error",
            sucess: false,
            message: error.message,
        });
    }
}

module.exports = asyncHandler;

/*
How The Code Is Working : 
const asyncHandler = (funnc) = {
    function(req,res,next) {
        try {
            await func(req,res,next);
        } catch (error) {
            res.status(error.status || 500).json({
                status: "error",
                sucess: false,
                message: error.message,
            });
        }
    }
} 

First, we are creating a function called asyncHandler that takes a function as an argument. This function will be the function that we want to wrap with a try-catch block.
*/