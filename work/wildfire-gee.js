export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>Wildfire Prediction with Google Earth Engine and Machine Learning Methods</h1>
            <br>
            <em>David Yang / 2023 August</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Google Earth Engine</a>
                <a>Machine Learning</a>
                <a>Deep Learning</a>
                <a>CART</a>
                <a>U-Net</a>
            </div>
            <br>
            <p>In response to the escalating threat of wildfires, this project seeks to revolutionize wildfire prediction using Google Earth Engine and machine learning methods. By leveraging the vast geospatial data repository and processing capabilities of Google Earth Engine, coupled with advanced machine learning algorithms, the project aims to create accurate and proactive wildfire prediction models. These models will utilize historical climate data, soil moisture, vegetation indices, and previous wildfire records to predict the likelihood of future wildfire events. Through this innovative approach, the project endeavors to provide valuable insights for improved wildfire management, resource allocation, and community safety, contributing to more effective disaster mitigation strategies and ecological preservation.</p>
            <!-- <br>
            <figure>
                <img src="https://i.ibb.co/jyKjX8z/wildfire-gee.webp" alt="gee-1">
                <figcaption>Fig.1 - Wildfire Prediction Result from CART classification model</figcaption>
            </figure> -->
            <br>
            <figure>
                <img src="https://i.ibb.co/FnPkBLP/wf-malibu.webp" alt="gee-2">
                <figcaption>Fig.1 - Wildfire Prediction Result from U-Net model: Malibu</figcaption>
            </figure>
            <br>
            <figure>
                <img src="https://i.ibb.co/QF3whh0/wf-beijing.webp" alt="gee-3">
                <figcaption>Fig.2 - Wildfire Prediction Result from U-Net model: Beijing</figcaption>
            </figure>
            <br>
            <em>*Note: This research project is completed independently during the TA position of Machine Learning Course by Prof. Ryan M. Rad.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://github.com/yzyly1992/wildfire-prediction-gee','_blank')">Github Repo ↗</button>
            </div>
        </article>
    </main>
`
};