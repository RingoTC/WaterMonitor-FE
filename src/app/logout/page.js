"use client";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        // 在组件加载时触发注销操作
        dispatch(logoutUser());

        // 重定向到登录页面或其他目标页面
        router.push('/home');
    }, [dispatch, router]);

    return (
        <div>
            Logging out...
        </div>
    );
};

export default LogoutPage;
