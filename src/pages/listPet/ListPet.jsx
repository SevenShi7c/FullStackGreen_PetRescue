import React from "react";
import Details from "./Details";
import "./listpet.css";

function ListPet() {
  return (
    <>
      <div className="container list-pet" data-aos="zoom-in">
        <h1 className="title text-center">TÌM KIẾM THÚ CƯNG</h1>
        <div className="row button-group">
            <button type="button" className="btn btn-primary">Tất cả</button>
            <button type="button" className="btn btn-primary">Chó</button>
            <button type="button" className="btn btn-primary">Mèo</button>
            <button type="button" className="btn btn-primary">Khác</button>
        </div>
        <div className="row form-filter">
          <div className="col-lg-4">
              <label htmlFor="gioitinh">Giới tính</label>
              <select className="form-control" name="gioitinh" id="">
                <option>Tất cả</option>
                <option>Đực</option>
                <option>Cái</option>
                <option>Chưa rõ</option>
              </select>
          </div>

            <div className="col-lg-4">
              <label htmlFor="dotuoi">Độ tuổi</label>
              <select className="form-control" name="dotuoi" id="">
                <option>Tất cả</option>
                <option>Trẻ</option>
                <option>Trưởng thành</option>
                <option>Già</option>
              </select>
            </div>

            <div className="col-lg-4">
              <label htmlFor="trietsan">Triệt sản</label>
              <select className="form-control" name="trietsan" id="">
                <option>Tất cả</option>
                <option>Có</option>
                <option>Không</option>
                <option>Chưa rõ</option>
              </select>
            </div>

            <div className="col-lg-4">
              <label htmlFor="trietsan">Màu sắc</label>
              <select className="form-control" name="trietsan" id="">
                <option>Tất cả</option>
                <option>Đen</option>
                <option>Trắng</option>
                <option>Vàng</option>
                <option>Vàng Trắng</option>
                <option>Vàng Đen</option>
                <option>Xiêm</option>
                <option>Xám</option>
              </select>
            </div>
            <div className="col-lg-4">
                <label htmlFor="ten">Tên</label>
                <input type="text"
                  className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>
            <div className="col-lg-2 button-submit">
              <button type="submit" className="btn btn-primary form-control" >Lọc</button>
            </div>
        </div>

        <div className="row details mt-5 mb-5">
          <div className="col col-md-6 col-lg-3">
            <Details img={"../imgs/cat1.jpg"} name={"Ablap"} sex={"Female"} age={"Age"} status={"Yes"}/>
          </div>
          <div className="col col-md-6 col-lg-3">
            <Details img={"../imgs/cat2.jpg"} name={"Victory"} sex={"Male"} age={"Age"} status={"Yes"}/>
          </div>
          <div className="col col-md-6 col-lg-3">
            <Details img={"../imgs/cat3.jpg"} name={"Black"} sex={"Female"} age={"Age"} status={"Yes"}/>
          </div>
          <div className="col col-md-6 col-lg-3">
            <Details img={"../imgs/cat4.jpg"} name={"Ducy"} sex={"Female"} age={"Age"} status={"Yes"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPet;
