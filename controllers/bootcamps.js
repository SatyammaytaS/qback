//des        Get all bootcamps
//route      Get /api/v1/bootcamps
//access     Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'});
};

//des        Get single bootcamp
//route      Get /api/v1/bootcamps/:id
//access     Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

//des        create new bootcamp
//route      Post /api/v1/bootcamps
//access     private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'create new bootcamp'});
}; 

//des        Update bootcamp
//route      put /api/v1/bootcamps/:id
//access     Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200)
    .json({success: true, msg: `update bootcamp ${req.params.id}`});
};

//des        delete bootcamp
//route      delete /api/v1/bootcamp/:id
//access     private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}`});
};