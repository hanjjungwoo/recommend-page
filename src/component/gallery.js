

const Gallery = () => {
    return (
      <div className="form-background">
        <h1>갤러리</h1>
        <div className="gallery-container">
          <div className="gallery-image-container">
            <div className="images">
              <a href="https://i.pinimg.com/564x/13/af/b8/13afb83dad548e3a63bad4d65c4d7350.jpg"><img src="https://i.pinimg.com/564x/13/af/b8/13afb83dad548e3a63bad4d65c4d7350.jpg" alt="gallery-img" width="100%" height="100%"/></a>
              <div className="desc"> 협재해변</div>
            </div>
            <div className="images">
              <a href="/gallery"><img src="https://i.pinimg.com/564x/58/aa/0b/58aa0b49569f66f6e21bd02e91cc4507.jpg" alt="Klematis" width="100%" height="100%"/></a>
              <div className="desc">하늘공원</div>
            </div>
            <div className="images">
              <a href="/gallery"><img src="https://i.pinimg.com/564x/09/f4/38/09f4386e35f0bf9835565dea4f421adf.jpg" alt="Klematis" width="100%" height="100%"/></a>
              <div className="desc">남산</div>
            </div>
            <div className="images">
              <a href="https://www.pinterest.co.kr/pin/384917099381971842/"><img src="https://i.pinimg.com/564x/01/95/e1/0195e1a7def01b5c253eefe875e47f10.jpg" alt="Klematis" width="100%" height="100%"/></a>
              <div className="desc">호수공원</div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Gallery 