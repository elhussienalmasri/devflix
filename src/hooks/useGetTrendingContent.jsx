import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import api from "../utils/axiosInstance";
import axios from "axios";
const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = useContentStore();

	useEffect(() => {
		const getTrendingContent = async () => {
			const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/${contentType}/trending`,{ withCredentials: true });
			setTrendingContent(res.data.content);
		};

		getTrendingContent();
	}, [contentType]);

	return { trendingContent };
};
export default useGetTrendingContent;
