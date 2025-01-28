import axios from 'axios';

class Interceptor {
  static API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWE2NmIwNTFkMGI0OWIwZjZjNjhiNDczOWFlNDkzNyIsIm5iZiI6MTczNzAxNjc5Ny45MDYsInN1YiI6IjY3ODhjNWRkMDY4MDlhYjIzNmFkMWM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PVt2SbpA7l3qPLU20YS4aOxJiRNBNFxq4BsyfqQvvs'; // Replace with your actual API key



  static getAxiosInstance() {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${this.API_KEY}`
      }    
    });
    Interceptor.initializeInterceptor(instance);
    return instance;
  }

  static initializeInterceptor(instance){

    //Request interceptors
    instance.interceptors.request.use((req)=>{
      console.log("Request send to "+req.url );
      return req;
    },
    (err)=>Promise.reject(err)
  )
    //Response interceptors
    instance.interceptors.response.use((res)=>{
      console.log("Response Received From "+ res.config.url);
      return res;
    },
    (err)=>Promise.reject(err)
  )
  }

}

export default Interceptor;
