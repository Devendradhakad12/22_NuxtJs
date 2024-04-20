export default defineEventHandler((event) => {
    console.log("context",event.context)
    return {
      name: 'dev'
    }
  })
  /* /myroute */