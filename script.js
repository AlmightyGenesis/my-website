 function hideAll() {

    document.querySelectorAll(".content-page").forEach(sec => {
        sec.classList.remove("active");
    });
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });
}

/* HOME */
function showSection(id) {
    hideAll();
    document.getElementById(id).classList.add("active");

    document.getElementById("navbar").style.display = "flex";

}

/* OPEN PAGE */
function openPage (type) {

    
    /* HOME PAGE HIDE */
    document.getElementById("home").classList.remove("active");

    /* CONTENT PAGE SHOW */
    document.getElementById("contentPage").classList.add("active");



    let title = "";
    let question = "";
    let text = "";
    let bgVideo = "";
    let detailHeading = "";
    
    switch(type) {

        /* ABOUT */

    case "overview":
        title = "COMPANY OVERVIEW";
        question = "Who are we and what drives our innovation?";
        text = "Our business model is designed to create opportunities for aspiring entrepreneurs, recent graduates, self-employed individuals, and business-minded professionals who want to build an independent career in the financial and digital service industry. Our platform encourages innovation, leadership, teamwork, and professional development while creating a strong ecosystem of financially empowered entrepreneurs and service professionals.";
        bgVideo = "overview.mp4";
        break;

        case "mission":
        title = "OUR MISSION";
        question = "What inspires our journey toward excellence?";
        detailHeading = "MAKING IMPOSSIBLE, POSSIBLE...";
        text = "Our mission is toprovide high-quality financial and digital services that support personal growth, entrepreneurship, and economic development through a powerful franchise business model and customer-centric approach. \n\nLimits exist only in the mind. What others call impossible, we call the starting point. With vision, grit, and relentless action, We turn doubt into results and barriers into breakthroughs.";
        bgVideo = "mission.mp4";
        break;

        case "vision":
        title = "OUR VISION";
        question = "Ready for future with us...!!!";
        detailHeading = "BUILDING LONG-TERM SUCCESS.";
        text = "Our vision is to be become one of the most trusted and innovative financial and digital service organisations by empowering individuals, entrepreneurs, and young professionals through accessible financial solution, franchise business opportunities, and technology-driven services accross the nation.";
        bgVideo = "vision.mp4";
        break;

        case "future":
        title = "FUTURE GOALS";
        question = "Where are we heading in the future?";
        detailHeading = "EXPAND BUSINESS GROWTH AND INNOVATION...";
        text = "Our future goals are focused on building a strong, innovative, and customer-driven company that delivers long-term value and sustainable growth. We aim to continuously evolve with changing technologies and market demands while maintaining excellence in every aspect of our business. \n\n We aim to build innovative digital experiences that combine technology, Creativity, and user-focused design. Our future goals focus on continuous growth, meaningful impact, and delivering solutions that simplify everyday experiences.";
        bgVideo = "future.mp4";
        break;

        case "values":

        title = "OUR VALUES";
        question = "What are the principals behind our success?";
        text = "Our values define who we are and guide everything we do. They help us build strong relationships, maitain trust, and achieve success together. We believe in honesty, responsibility, teamwork, and continous improvement in every aspect of our work.";
        bgVideo = "values.mp4";
        break;

    case "why":

        title = "WHY CHOOSE US";
        question = "Why do businesses trust Almighty Genesis?";
        detailHeading = "START YOUR BUSINESS DREAM WITH US..."
        text = "If you are thinking to start a new business or if you want to start a new career. \n\nOur Company is commited to delivering innovative business solutions that help organizations grow, complete, and succeed in the modern digital market. We combine technology, strategy, and customer-focused services to create long-term value for our clients. \n\nWe understand the challanges businesses face in today's competitive environment. Our experienced team provides strategic solutions that improve efficiency, productivity, and overall business performance. "
        bgVideo = "why.mp4";
        break;

    /* SERVICES */

    case "frontend":
        title = "FRONTEND DEVELOPMENT";
        question = "Need attractive and interactive websites?";
        text = "We create visually stunning, responsive, and user-friendly frontend interfaces using modern technologies.";
        bgVideo = "frontend.mp4";
        break;

        case "backend":
        title = "BACKEND DEVELOPMENT";
        question = "Looking for secure and scalable systems?";
        text = "We develop powerful bakend systems, APIs, databases, and server-side architectures.";
        bgVideo = "backend.mp4";
        break;

        case "fullstack":

        title = "FULL STACK DEVELOPMENT";
        question = "Want complete end-to-end web solutions?";
        text = "Our fullstack development services combine frontend and backend technologies for complete web platforms. \n\n Full stack development is the process of building both the frontend and backend of a web application. A full stack developer works on everything from designing user interfaces to managing servers, databases, and application logic.";
        bgVideo = "fullstack.mp4";
        break;

        case "ecommerce":

        title = "E-COMMERCE WEBSITE";
        question = "Ready to launch your online business?";
        text = "We build professional ecommerce websites with payment integration, product management, and advances UI";
        bgVideo = "ecommerce.mp4";
        break;

        case "erp":

        title = "ERP SOLUTIONS";
        question = "Need smart business management systems?";
        text = "Our ERP systems streamline operations, automate workflows, and improve productivity.";
        bgVideo = "erp.mp4";
        break;

        case "crm":

        title = "CRM SOFTWARE";
        title = "CRM SOFTWARE";
        question = "Want Stronger Customer relationships?";
        text = "Our CRM Software helps businesses manage Customers, sales, leads, and communication effectively.";
        bgVideo = "crm.mp4";
        break;

        case "ai":

        title = "AI SOLUTIONS";
        question = "Ready to integrate artificial intelligence?";
        text = "We develop AI-Powered systems for automation, analytics, and intelligent business solutions.";
        bgVideo = "ai.mp4";
        break;

        case "seo":

        title = "SEO SERVICES";
        question = "Want your website improve visibility, traffic, and online presence for businesses.";
        text = "We provide the services.";
        bgVideo = "seo.mp4";
        break;

        case "social":

        title = "SOCIAL MEDIA MARKETING";
        question = "looking to grow your digital audience?";
        text = "We create strategic social media campaigns to increase brand engagement and reach.";
        bgVideo = "social.mp4";
        break;

        case "branding":

            title = "BRANDING";
            question = "Need a strong brand identuty?";
            text = "We help businesses create professional branding stratagies, logos, and marketing identities.";
            bgVideo = "branding.mp4";
            break;

        case "hosting":

           title = "HOSTING SERVICES";
           question = "Need fast and secure hosting?";
           text = "We provide scalable, reliable, and high-performance hosting solutions.";
           bgVideo = "hosting.mp4";
           break;

        case "insurance":

            title = "INSURANCE SERVICES";
            question = "Looking for financial secutity and protection?";
            text = "We provide trusted insurance services with flexible and secure policy solutions.";
            bgVideo = "insurance.mp4";
            break;

    case "loans":
        title = "LOAN ASSISTANCE";
        question = "Need financial support for your goals?";
        text = "We provide affortable and flexible loan assistance for businesses and individuals.";
        bgVideo = "loan.mp4";
        break;

    case "franchise":
        title = "FRANCHISE BENIFITS";
        question = "How franchise will work?";
        text = "A franchise business offers many advantages to entrepreneurs who want to start a business with lower risk and better support.Franchise alsoprovide a proven business model, Which helps owners avoid common startup mistakes. One of the biggest benifits is brand recognision. Customers already know and trust the brand, making it easier to attract sales from the beginning";  
        bgVideo = "franchise.mp4";
        break;
    }  
    document.getElementById("pageTitle").innerText = title;
    document.getElementById("pageQuestion").innerText = question;
    document.getElementById("detailTitle").innerText = detailHeading;
    document.getElementById("detailText").innerText = text;

    document.getElementById("videoSource").src = bgVideo;
    document.getElementById("contentVideo").load();

}