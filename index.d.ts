import { EmitterSubscription } from 'react-native';

export interface Configuration {
  maxRetryCount: number;
  timeoutIntervalForRequest: number;
  timeoutIntervalForResource: number;
};

export interface Options {
  callback: {
    // 设置回调请求的服务器地址，例如http://oss-demo.aliyuncs.com:23450。
    url: string;
    //（可选）设置回调请求消息头中Host的值，即您的服务器配置Host的值。
    host?: string;
    // 设置发起回调时请求body的值。
    body: string; // 'bucket=${bucket}&object=${object}&var1=${x:var1}',
    // 设置发起回调请求的Content-Type。
    contentType: 'application/x-www-form-urlencoded',
    // 设置发起回调请求的自定义参数。
    customValue: {
      [key: string]: string;
    }
  }
}
export interface ProgressCallbackArgs {
  currentSize: number;
  totalSize: number;
}

export type AliyunOSSProgressCallback = (args: ProgressCallbackArgs) => void;

export type AliyunOSSEventType = 'uploadProgress' | 'downloadProgress';

declare const AliyunOSS = {

  enableDevMode: () => never,

  initWithPlainTextAccessKey: (
    accessKey: string,
    secretKey: string,
    endPoint: string,
    configuration?: Configuration,
  ) => never,

  initWithSecurityToken: (
    securityToken: string,
    accessKey: string,
    secretKey: string,
    endPoint: string,
    configuration?: Configuration,
  ) => never,

  asyncUpload: (
    bucketName: string,
    objectKey: string,
    filepath: string,
    options: any,
    ) => Promise<'UploadSuccess' | string>,

  addEventListener: (
    event: AliyunOSSEventType,
    callback: AliyunOSSProgressCallback,
  ) => EmitterSubscription,

  removeEventListener: (subscription: EmitterSubscription) => never,
}

export default AliyunOSS;
