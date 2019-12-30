import jsonp from "jsonp";

// 请求百度接口
export const searchApi = value => {
  return new Promise((resolve, reject) => {
    jsonp(
      "http://suggestion.baidu.com/su?wd=" + value,
      {
        param: "cb"
      },
      (err, data) => {
        if (err) {
          reject(false);
        } else {
          resolve(data);
        }
      }
    );
  });
};
