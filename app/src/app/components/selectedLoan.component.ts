// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-selectedLoan',
  templateUrl: './selectedLoan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class selectedLoanComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_ZJxIlh6PeVoj3K3v(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZJxIlh6PeVoj3K3v(bh) {
    try {
      bh = this.sd_2ZNYiUUvCH84ctHU(bh);
      //appendnew_next_sd_ZJxIlh6PeVoj3K3v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZJxIlh6PeVoj3K3v');
    }
  }

  update(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_ssfyh38o8yOK0Gme(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2J0mYpWppmiIyBdy');
    }
  }
  //appendnew_flow_selectedLoanComponent_start

  sd_2ZNYiUUvCH84ctHU(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_j1Up3S7Lu7uXeilp(bh);
      //appendnew_next_sd_2ZNYiUUvCH84ctHU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ZNYiUUvCH84ctHU');
    }
  }

  sd_j1Up3S7Lu7uXeilp(bh) {
    try {
      this.page.name = undefined;
      this.page.surname = undefined;
      this.page.idNumber = undefined;
      this.page.cellNumber = undefined;
      this.page.email = undefined;
      this.page.status = undefined;
      this.page.doc = undefined;
      this.page.currentAccount = undefined;
      this.page.selected = undefined;
      this.page.update_ = false;
      this.page.userInfos = undefined;
      this.page.userData = undefined;
      this.page.time = undefined;
      this.page.profileImage = undefined;
      this.page.image = undefined;
      this.page.showImage = false;
      this.page.selectedUser = undefined;
      this.page.showLoader = false;
      this.page.rejectionReason = undefined;
      bh = this.sd_H299LlXOjbeNbUX2(bh);
      //appendnew_next_sd_j1Up3S7Lu7uXeilp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j1Up3S7Lu7uXeilp');
    }
  }

  sd_H299LlXOjbeNbUX2(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_72Ms36Z0Eb1BOYML(bh);
      //appendnew_next_sd_H299LlXOjbeNbUX2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H299LlXOjbeNbUX2');
    }
  }

  sd_72Ms36Z0Eb1BOYML(bh) {
    try {
      const page = this.page;
      let userDataString = sessionStorage.getItem('userLoan');

      let userData = JSON.parse(userDataString || '[]');
      page.userData = userData;
      page.userData.interestRate = 13;

      bh.url = page.ssdUrl + 'get-customers';

      console.log('recived', page.userData);

      page.profileImage =
        page.ssdUrl + `download-picture/${page.userData.email}`;

      bh = this.sd_ro0koG4IKXUtZsR4(bh);
      //appendnew_next_sd_72Ms36Z0Eb1BOYML
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_72Ms36Z0Eb1BOYML');
    }
  }

  async sd_ro0koG4IKXUtZsR4(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_8DBd5eafoSLS50GB(bh);
      //appendnew_next_sd_ro0koG4IKXUtZsR4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ro0koG4IKXUtZsR4');
    }
  }

  sd_8DBd5eafoSLS50GB(bh) {
    try {
      const page = this.page;
      page.selectedUser = page.users.find(
        (user, indx) => user.email == page.userData.email
      );

      console.log('Selected User: ', page.selectedUser);
      //appendnew_next_sd_8DBd5eafoSLS50GB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8DBd5eafoSLS50GB');
    }
  }

  sd_ssfyh38o8yOK0Gme(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_EF4Oha4eQkQI0Lm9(bh);
      //appendnew_next_sd_ssfyh38o8yOK0Gme
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ssfyh38o8yOK0Gme');
    }
  }

  sd_EF4Oha4eQkQI0Lm9(bh) {
    try {
      const page = this.page;
      page.update_ = true;
      page.userData.date = new Date();
      page.userData.comeFrom = 'Loan';

      page.showLoader = true;

      bh.url = page.ssdUrl + 'update-loan';
      bh.collection = 'loans';

      bh.depositURL = page.ssdUrl + 'update';

      console.log('Form: ', bh.input.form);
      console.log('Userdata: ', page.userData);

      if (page.userData.status == 'rejected') {
        page.userData.rejectionReason = page.rejectionReason;
      }
      bh = this.sd_R58AMsRVn4rtPf3y(bh);
      //appendnew_next_sd_EF4Oha4eQkQI0Lm9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EF4Oha4eQkQI0Lm9');
    }
  }

  sd_R58AMsRVn4rtPf3y(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_qOSoJ8UqSZhdqf4b(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R58AMsRVn4rtPf3y');
    }
  }

  async sd_qOSoJ8UqSZhdqf4b(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userData,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_xGvOlkNIZyH2prbc(bh);
      //appendnew_next_sd_qOSoJ8UqSZhdqf4b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qOSoJ8UqSZhdqf4b');
    }
  }

  async sd_xGvOlkNIZyH2prbc(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.userData.status,
          'approved',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_roOT7DU7Au8HVCJK(bh);
      } else {
        bh = await this.sd_Nb8LGOahzdiuarax(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xGvOlkNIZyH2prbc');
    }
  }

  sd_roOT7DU7Au8HVCJK(bh) {
    try {
      const page = this.page;
      page.selectedUser.available_balance += page.userData.amount;

      bh.date = page.userData.date.toDateString();
      bh.date = bh.date.split(' ');
      bh.date = `${bh.date[1]} ${bh.date[2]} ${bh.date[3]}`;

      bh.message = {
        message: `Capitec: Received ${page.userData.amount} from Capitec Ltd for ${page.userData.reason}'s Credit'; Digital Payment. Avail R${page.selectedUser.available_balance}; ${bh.date}`,
        read: false,
        _type: 'deposit',
        belongsTo: page.userData.accountNumber,
      };

      bh.msgURL = page.ssdUrl + 'add-messages';

      bh.feedback = `${page.userData.reason} loan for ${page.userData.fullName} was approved`;
      bh = this.sd_G3nLVjaea3N2i6hK(bh);
      //appendnew_next_sd_roOT7DU7Au8HVCJK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_roOT7DU7Au8HVCJK');
    }
  }

  async sd_G3nLVjaea3N2i6hK(bh) {
    try {
      let requestOptions = {
        url: bh.msgURL,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.message,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_SGx89taxkwrBpRSk(bh);
      //appendnew_next_sd_G3nLVjaea3N2i6hK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G3nLVjaea3N2i6hK');
    }
  }

  async sd_SGx89taxkwrBpRSk(bh) {
    try {
      let requestOptions = {
        url: bh.depositURL,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.selectedUser,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_YEqgpwm13ln3udN7(bh);
      //appendnew_next_sd_SGx89taxkwrBpRSk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SGx89taxkwrBpRSk');
    }
  }

  sd_YEqgpwm13ln3udN7(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.feedback, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_48CKw2af704RvPyl(bh);
      //appendnew_next_sd_YEqgpwm13ln3udN7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YEqgpwm13ln3udN7');
    }
  }

  async sd_48CKw2af704RvPyl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Loan management');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_48CKw2af704RvPyl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_48CKw2af704RvPyl');
    }
  }

  sd_Nb8LGOahzdiuarax(bh) {
    try {
      const page = this.page;
      console.log('User to be updated: ', page.userData);

      console.log(page.userData);

      bh.feedback = `${page.userData.reason} loan for ${page.userData.fullName} was rejected`;

      bh = this.sd_ojHEXSneLJV6lFb3(bh);
      //appendnew_next_sd_Nb8LGOahzdiuarax
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nb8LGOahzdiuarax');
    }
  }

  sd_ojHEXSneLJV6lFb3(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.feedback, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_2ZqvCoHgzXDtSohh(bh);
      //appendnew_next_sd_ojHEXSneLJV6lFb3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ojHEXSneLJV6lFb3');
    }
  }

  async sd_2ZqvCoHgzXDtSohh(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Loan management');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_2ZqvCoHgzXDtSohh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ZqvCoHgzXDtSohh');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_selectedLoanComponent_Catch
}
