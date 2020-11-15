import {NextFunction, Request, Response, ErrorRequestHandler} from "express";

export default {

logErrors: (err: ErrorRequestHandler, req: Request, res:Response, next: NextFunction) => {
    console.error(err);
    next(err);
},

clientErrorHandler: (err: ErrorRequestHandler, req: Request, res:Response, next: NextFunction) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
},

errorHandler: (err: ErrorRequestHandler, req: Request, res:Response, next: NextFunction) => {
    res.status(500);
    res.render('error', { error: err });
},

}
