import { NOT_FOUND_IMAGE_SRC } from "src/config/defaults"

export const handleImageError = (e: any) => {
    e.target.src = NOT_FOUND_IMAGE_SRC;
}