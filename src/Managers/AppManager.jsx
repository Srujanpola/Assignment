class AppManager {
  constructor() {
    this._app = null;
  }

  async getAllProducts() {
    try{

    }
    catch(error){
      console.log("get products response error",error.message);
    }
  }
}

const appMngr = new AppManager();
export default appMngr;
