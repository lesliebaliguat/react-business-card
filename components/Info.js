
export default function Info() {
    return (
        <header>
            <img className="profile-img"  src="https://static.vecteezy.com/system/resources/thumbnails/003/436/180/small/portrait-of-a-beautiful-woman-full-face-vector.jpg"/>
            <h1 className="info-name">Leslie <span className="info-surname">Baliguat Sia</span></h1>
            <p className="info-profession">Frontend Developer</p>
            <p className="info-email">baliguatleslie@gmail.com</p>
            <button className="info-buttons info-button-email"><i className="fa-solid fa-envelope"></i>Email</button>
            <button className="info-buttons info-button-linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
        </header>
    )
}