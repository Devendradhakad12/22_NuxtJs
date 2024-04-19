export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(from, "from");
  // console.log(to, "to");

  const isLoggedIn = true;
  const type: String = "admin";

  if (!isLoggedIn) {
    return navigateTo("/login");
  } else if (type !== "admin") {
    return navigateTo("/");
  } 
});
