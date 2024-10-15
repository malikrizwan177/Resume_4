export default function ScrollToTop() {

  return (
    <div className="bottom-10 float-right mr-10 p-2 w-10 h-10 rounded-full bg-white sticky cursor-pointer -mt-10 hover:bg-secondary">
        <img onClick={() => window.scrollTo(0, 0)} src="./icons/up-arrow.png" alt="arrow up"/>
    </div>
  );
}