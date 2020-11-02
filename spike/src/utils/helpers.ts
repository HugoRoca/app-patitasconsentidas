/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import multer from "multer"
import path from "path"
import { v4 } from "uuid"

export const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, path.join(__dirname, "images"))
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, v4() + path.extname(file.originalname))
  },
})

export const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true)
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false)
  }
}
