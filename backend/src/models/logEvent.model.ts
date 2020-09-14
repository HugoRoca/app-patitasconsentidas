import os from "os";
export interface LogEvent {
  Date?: Date;
  HostName?: any;
  Trace?: any;
  level: any;
  className: any;
  method: any;
  parameters: any;
  message: any;
  elapsedTime: any;
  country: any;
  exception: any;
  contentLength: 0;
  remoteAddress: "";
  source: "";
  application: "";
  codeTransaction: "";
  application_id: "";
}

export const buildLogModel = (logEvent: LogEvent): LogEvent => {
  return {
    Date: new Date(),
    HostName: os.hostname(),
    Trace: "LogEvent",
    level: logEvent.level,
    className: logEvent.className,
    method: logEvent.method,
    parameters: logEvent.parameters,
    message: logEvent.message,
    elapsedTime: logEvent.elapsedTime,
    country: logEvent.country,
    exception: logEvent.exception,
    contentLength: logEvent.contentLength,
    remoteAddress: logEvent.remoteAddress,
    source: logEvent.source,
    application: logEvent.application,
    codeTransaction: logEvent.codeTransaction,
    application_id: logEvent.application_id,
  };
};
