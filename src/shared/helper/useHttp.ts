export const useHttp = async (url: string, params: object) => {
    const cookie = useCookie("token");
  
    const opts = {
      key: url,
      async onRequest({ options }: object) {
        options.headers = options.headers || {};
        options.headers["Content-Type"] = "application/json";
        if (cookie.value) {
          options.headers["Authorization"] = `Bearer ${cookie.value}`;
        }
      },
  
      async onRequestError({ error }) {
        console.log(error.message);
      },
  
      async onResponseError({ response }) {
        console.log(response._data.message);
      },
  
      ...params,
    };
  
    const { data, pending, error, execute } = await useFetch(url, opts);
  
    return {
      data,
      pending,
      error,
      execute,
    };
  };