/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import fs from "fs"
import path from "path"
import { v4 } from "uuid"

const UPLOAD = {
  UPLOAD: "/upload",
  IMAGE: "/image/",
  FILE: "/file/",
  MAXFILESIZE: 200 * 1024 * 1024,
}

const mkdirFile = (path: any) => {
  const pathList = path.split("/")
  let fileDir = ""

  pathList.forEach((i: any) => {
    if (i) {
      fileDir += "/" + i
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir)
      }
    }
  })
}

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

export const uploadImg = async (ctx: any) => {
  const file = ctx.request.files.image
  const fileName = UPLOAD.UPLOAD + UPLOAD.IMAGE
  const tail = file.name === "blob" ? "png" : file.name.split(".").pop()
  const filePath = path.join(__dirname, "public/images/" + v4() + "." + tail)
  console.log(filePath)
  await mkdirFile(fileName)
  await saveFile(file.path, filePath)
    .then((su: any) => {
      const upload_img = su.substring(UPLOAD.UPLOAD.length, su.length)
      ctx.body = {
        error_code: 10000,
        error_message: "Successful upload of files",
        realName: upload_img,
      }
    })
    .catch((err: any) => {
      ctx.body = {
        error_code: 20008,
        error_message: "Failed to upload file!",
      }
    })
}
