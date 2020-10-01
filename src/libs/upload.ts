/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import fs from "fs"
import path from "path"
import md5 from "blueimp-md5"
import log from "fancy-log"

const saveFile = (file: any, path: any) => {
  return new Promise((resolve, reject) => {
    const render = fs.createReadStream(file)
    const upStream = fs.createWriteStream(path)
    render.pipe(upStream)
    upStream.on("finish", () => {
      resolve(path)
    })
    upStream.on("error", (err) => {
      reject(err)
    })
  })
}

export const uploadImg = async (file: any): Promise<any> => {
  let fileName
  let fileNameComplete

  try {
    const date_now = new Date()
    const extension = file.name === "blob" ? "png" : file.name.split(".").pop()
    fileName = md5(`${date_now.getTime()}`)
    fileNameComplete = fileName + "." + extension
    const filePath = path.resolve(
      __dirname,
      "../../public/upload/images/",
      fileNameComplete
    )

    await saveFile(file.path, filePath)

    return {
      success: true,
      fileName,
      fileNameComplete,
    }
  } catch (error) {
    log.error(error)
    return { success: false, fileName, fileNameComplete }
  }
}
