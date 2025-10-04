import api from "./axios";

export const http = {
  get: async <T>(url: string, params?: any): Promise<T> => {
    const res = await api.get<T>(url, { params });
    return res.data;
  },

  post: async <T>(url: string, data?: any): Promise<T> => {
    const res = await api.post<T>(url, data);
    return res.data;
  },

  put: async <T>(url: string, data?: any): Promise<T> => {
    const res = await api.put<T>(url, data);
    return res.data;
  },

  patch: async <T>(url: string, data?: any): Promise<T> => {
    const res = await api.patch<T>(url, data);
    return res.data;
  },

  delete: async <T>(url: string): Promise<T> => {
    const res = await api.delete<T>(url);
    return res.data;
  },

  upload: async <T>(
    url: string,
    file: File | Blob,
    fieldName = "file"
  ): Promise<T> => {
    const formData = new FormData();
    formData.append(fieldName, file);

    const res = await api.post<T>(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
  },
};
