import logo from "./logo.svg";
import "./App.css";
import MyModal from "./components/MyModal/MyModal";
import MyProgress from "./components/Progress/MyProgress";
import { useState } from "react";
import "./components/Progress/MyProgress.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleOk = () => {
    console.log(handleOk);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <header>سلام دنیا</header>
      <h1> نوشته تستی</h1>
      <button onClick={() => setShowModal(true)}>باز کردن مودال</button>
      {showModal ? (
        <MyModal
          isModalVisible={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          title="اولین مودال من"
          cancelText="بستن"
          okText="باشه"
        >
          <div>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
        </MyModal>
      ) : null}
      <div className="progress">
        <MyProgress
          percent={30}
          size="small"
          strokeColor="red"
          trailColor="#ccc"
        />
        <MyProgress
          percent={50}
          size="small"
          status="active"
          trailColor="#ccc"
        />
        <MyProgress percent={70} size="small" status="exception" />
        <MyProgress percent={100} size="small" />
      </div>
    </div>
  );
}

export default App;
