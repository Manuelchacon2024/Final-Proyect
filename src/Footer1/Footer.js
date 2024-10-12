import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function Footer () {

    return(

        <footer className="bg-dark text-white pt-5 pb-4">
  <div className="container text-center text-md-left">
    <div className="row text-center text-md-left">
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold">Company Name</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae
          enim ipsum, quidem at magnam aliquam inventore eos, aliquid,
          reprehenderit eligendi voluptatibus quisquam tenetur expedita
          assumenda labore nostrum consequatur velit?
        </p>
      </div>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
          Products
        </h5>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            The provider
          </a>
        </p>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            Creativity
          </a>
        </p>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            Source Files
          </a>
        </p>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            About It
          </a>
        </p>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
          Useful Links
        </h5>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            Your account
          </a>
        </p>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            Become an affiliate
          </a>
        </p>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            AShiping rate
          </a>
        </p>
        <p>
          <a href="#" className="text-white" style={{ textDecoration: "none" }}>
            Help
          </a>
        </p>
      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
          Contact
        </h5>
        <p>
          <i className="fas fa-home mr-3" />
          San Juan Opico, KM 32, Calle Nueva
        </p>
        <p>
          <i className="fas fa-envelope mr-3" />
          manuelchacon772@gmail.com
        </p>
        <p>
          <i className="fas fa-phone mr-3" />
          +503 61682805
        </p>
        <p>
          <i className="fas fa-print mr-3" />
          +503 73094907
        </p>
      </div>
    </div>
    <hr className="mb-4" />
    <div className="row align-items-center">
      <div className="col-md-7 col-lg-8">
        <p>
          {" "}
          Copyright 2024 All rights reserved by:
          <a href="#" style={{ textDecoration: "none" }}>
            <strong className="text-warning">Manuel chacón</strong>
          </a>
        </p>
      </div>
      <div className="col-md5 col-lg-4">
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a
                href="#"
                className="btn-floating btn-sm text-white"
                style={{ fontSize: 23 }}
              >
                <i
                  className="fab 
                          fa-facebook"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="btn-floating btn-sm text-white"
                style={{ fontSize: 23 }}
              >
                <i
                  className="fab 
                          fa-youtube"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="btn-floating btn-sm text-white"
                style={{ fontSize: 23 }}
              >
                <i
                  className="fab 
                          fa-google-plus"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="btn-floating btn-sm text-white"
                style={{ fontSize: 23 }}
              >
                <i
                  className="fab 
                          fa-instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
    
}