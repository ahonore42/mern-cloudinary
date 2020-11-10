const Images = props => {
    const pictures = props.imgUrls.map((url,i) => <img className="cloudPic" alt="upload" src={url} key={i} />)

    return (
        <div className="imgComponent">
            {props.imgUrls.length ? 
            <div className="image-container">{pictures}</div> 
            : 
            <div>
                <img className="cloudy" alt="cloudy" src="https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png" />
            </div>
            }
        </div>
    )
}

export default Images