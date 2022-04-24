import '../css/cssComponents/Achievement.css'

function Achievement() {
    return (
        <>
            <div className="achievement">
                <div className="achievementCustom">
                    <h1>Custom Furniture Built Only For You</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</span>
                </div>
                <ul>
                    <li>
                        <div className="achievementIcon"><i className="fa-solid fa-landmark"></i></div>
                        <h2>Mission</h2>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</span>
                    </li>
                    <li>
                        <div className="achievementIcon"><i className="fa-solid fa-gem"></i></div>
                        <h2>Vision</h2>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</span>
                    </li>
                    <li>
                        <div className="achievementIcon"><i className="fa-brands fa-drupal"></i></div>
                        <h2>History</h2>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Achievement