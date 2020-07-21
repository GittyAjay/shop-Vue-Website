export const error = {
    text: 'OOPS! something bad happen',
    color: 'error',
};

// Alert message for blog module

const updatePost = {
    text: 'Blog post succesfully updated',
    color: 'success',
};
const deletePost = {
    text: 'Blog post deleted succesfully',
    color: 'info',
};

const publishPost = {
    text: 'Blog post succesfully published',
    color: 'success',
};

const draftPost = {
    text: 'Blog post save to draft',
    color: 'success',
};

export const BlogMessage={publishPost, updatePost, deletePost, draftPost, error,}

// Alert Message for Category

const updateCategory = {
    text: 'Category succesfully updated',
    color: 'success',
};
const deleteCategory = {
    text: 'Category deleted succesfully',
    color: 'info',
};

const publishCategory = {
    text: 'Category succesfully published',
    color: 'success',
};

const draftCategory = {
    text: 'Category save to draft',
    color: 'success',
};

export const CategoryMessage={publishCategory, updateCategory, deleteCategory, draftCategory, error,}

// Alert Message for Coupons

const updateCoupon = {
    text: 'Coupon succesfully updated',
    color: 'success',
};

const createdCoupon = {
    text: 'Coupon succesfully created',
    color: 'success',
};

const deleteCoupon = {
    text: 'Coupon deleted succesfully',
    color: 'info',
};

const activeCoupon = {
    text: 'Coupon status changed to active',
    color: 'success',
};

const desableCoupon = {
    text: 'Coupon status changed to desable',
    color: 'success',
};

export const CouponMessage={updateCoupon, deleteCoupon, activeCoupon, desableCoupon, createdCoupon, error,}