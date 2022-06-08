import axios, { Axios } from "axios";

const APP_NAME = process.env.REACT_APP_NAME;
const API_URL = process.env.REACT_APP_PUBLIC_URL;

export class ApiService {

  private api: Axios;

  constructor() {
    
    this.api = axios.create({ baseURL: API_URL });
    this.api.interceptors.request.use(config => {
      const token = localStorage.getItem(APP_NAME || '');
      config.headers = {
        'Authorization': 'Bearer ' + token
      }
      return config;
    });
  }

  public get<T = any>(url: string, params?: any): Promise<T> {
    return this.api.get(url, params);
  }
  public getAll<T = any>(url: string, params?: any): Promise<T[]> {
    return this.api.get(url,);
  }

  public post<T = any>(url: string, body: any): Promise<T> {
    return this.api.post(url, body);
  }

  public put<T = any>(url: string, body: any): Promise<T> {
    return this.api.put(url, body);
  }

  public delete<T = any>(url: string, params?: any): Promise<T> {
    return this.api.delete(url, params);
  }
}
