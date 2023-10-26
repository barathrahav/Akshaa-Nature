"use client"
import { idType } from '@/interFace/interFace';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogDetailsArea from './BlogDetailsArea';
const BlogDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb breadHome={'Home'} breadMenu={'Blog Details'} />
            <BlogDetailsArea id={id}/>
        </>
    );
};

export default BlogDetailsMain;