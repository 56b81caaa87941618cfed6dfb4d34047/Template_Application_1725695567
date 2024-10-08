<template>
  <main class="h-7/12 flex items-center justify-center" style=""><div class="p-10 flex flex-col items-center justify-center bg-white w-full max-w-md shadow-lg" style=""><div class="text-black w-full"><div class="w-full mb-5" style=""><h3 class="text-3xl font-bold mb-5 text-center" style="" data-mf-new="true">Log in to your accounts</h3> <div class="flex justify-center mb-5" style=""><p class="mr-2 mt-1.5">Don't have an account?</p> <button class="bg-green-600 hover:bg-green-500 active:bg-green-600 text-white font-medium text-sm px-2 py-1 rounded-lg">Sign up</button></div></div> <form class="space-y-5 w-full"><div><label class="font-medium">Email</label> <input type="email" required="required" class="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-300 focus:border-purple-600 shadow-sm rounded-lg"></div> <div><label class="font-medium">Password</label> <input type="password" required="required" class="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-300 focus:border-purple-600 shadow-sm rounded-lg"></div> <button class="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">Sign in</button> <div class="text-center"><button class="bg-red-500 hover:bg-red-400 active:bg-yellow-500 text-white font-medium text-sm p-3 rounded-lg">Forgot password?</button></div></form></div></div></main>
</template>

<script>
export default {
  name: 'BasicLoginForm',
  data() {
    return {
      expanded: false,
      data: null
    };
  },
  methods: {
    handleSubmit() {
      // This method should contain logic for form submission.
    }
  }
};
</script>
