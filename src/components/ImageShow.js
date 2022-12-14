import React from "react";
function ImageShow({ image }) {
    return (
        <div>
            <img src={image.urls.small} alt={image.ale_description} />
        </div>
    )
}
export default ImageShow