<template>
    <section class="relative py-14 flex flex-col items-center">
        <div class="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
            <div class="max-w-xl sm:text-center md:mx-auto flex items-center flex-col">
                <h3 class="text-center text-3xl text-white font-semibold sm:text-4xl">
                    What Our Users Are Saying
                </h3>
                <p class="mt-3 text-center text-white">
                    Discover why people love our app
                </p>
            </div>
            <div class="mt-12">
                <ul class="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <!-- Testimonial 1 -->
                    <li class="bg-white rounded-xl border shadow-md w-fit">
                        <div class="p-4">
                            <svg class="w-9 h-9 text-gray-300" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- SVG content --></svg>
                        </div>
                        <figure>
                            <blockquote>
                                <p class="text-gray-800 text-lg font-semibold px-4 py-1">
                                    This app has completely transformed the way I work. It's intuitive, efficient, and a real game-changer!
                                </p>
                            </blockquote>
                            <div class="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                                <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" 
                                     class="w-16 h-16 rounded-full border-2 border-indigo-500" />
                                <div>
                                    <span class="block text-gray-800 font-semibold">
                                        Sarah Johnson
                                    </span>
                                    <span class="max-w-full block text-indigo-600 text-xs mt-0.5">
                                        Marketing Professional
                                    </span>
                                </div>
                            </div>
                        </figure>
                    </li>
                    <!-- Testimonial 2 -->
                    <li class="bg-white rounded-xl border shadow-md w-fit">
                        <div class="p-4">
                            <svg class="w-9 h-9 text-gray-300" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- SVG content --></svg>
                        </div>
                        <figure>
                            <blockquote>
                                <p class="text-gray-800 text-lg font-semibold px-4 py-1">
                                    I've tried many similar apps, but this one stands out. It's user-friendly and packed with features I didn't even know I needed.
                                </p>
                            </blockquote>
                            <div class="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" 
                                     class="w-16 h-16 rounded-full border-2 border-indigo-500" />
                                <div>
                                    <span class="block text-gray-800 font-semibold">
                                        Michael Chen
                                    </span>
                                    <span class="max-w-full block text-indigo-600 text-xs mt-0.5">
                                        Software Engineer
                                    </span>
                                </div>
                            </div>
                        </figure>
                    </li>
                    <!-- Testimonial 3 -->
                    <li class="bg-white rounded-xl border shadow-md w-fit">
                        <div class="p-4">
                            <svg class="w-9 h-9 text-gray-300" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- SVG content --></svg>
                        </div>
                        <figure>
                            <blockquote>
                                <p class="text-gray-800 text-lg font-semibold px-4 py-1">
                                    The customer support is exceptional. They're always ready to help and truly care about user experience.
                                </p>
                            </blockquote>
                            <div class="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                                <img src="https://randomuser.me/api/portraits/men/86.jpg" 
                                     class="w-16 h-16 rounded-full border-2 border-indigo-500" />
                                <div>
                                    <span class="block text-gray-800 font-semibold">
                                        Emily Rodriguez
                                    </span>
                                    <span class="max-w-full block text-indigo-600 text-xs mt-0.5">
                                        Small Business Owner
                                    </span>
                                </div>
                            </div>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
        <div class="absolute top-0 w-full h-[350px]" 
             style="background: linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%);"></div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
