import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout home-container")}>
        <div className={classes("column-layout home")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout left")}>
              <h6 className={classes("content_2")}>
                <span>Rapid Fission Inc.</span>
              </h6>
              <div className={classes("row-layout buttons")}>
                <IgrButton variant="flat" type="button" className={classes("button_3 button_3_1")}>
                  <span key={uuid()}>Home</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" type="button" className={classes("button_3 button_3_2")}>
                  <span key={uuid()}>My info</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" disabled="true" type="button" className={classes("button_3 button_3_3")}>
                  <span key={uuid()}>People</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" disabled="true" type="button" className={classes("button_3 button_3_4")}>
                  <span key={uuid()}>My files</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <div className={classes("row-layout left")}>
              <IgrIconButton variant="flat" className={classes("button button_1")}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <IgrAvatar src="/src/assets/b19ca11ab1662964f651cf3fe1b49fb6e9f90875.png" shape="circle" className={classes("avatar avatar_2")}></IgrAvatar>
            </div>
          </div>
          <div className={classes("column-layout page-content")}>
            <div className={classes("row-layout header_1")}>
              <div className={classes("row-layout title")}>
                <span className={classes("material-icons icon_1")}>
                  <span key={uuid()}>home</span>
                </span>
                <h4 className={classes("home_1")}>
                  <span>Home</span>
                </h4>
              </div>
            </div>
            <div className={classes("column-layout content-and-footer")}>
              <div className={classes("row-layout content")}>
                <div className={classes("column-layout left_1")}>
                  <div className={classes("row-layout profile")}>
                    <IgrAvatar src="/src/assets/b19ca11ab1662964f651cf3fe1b49fb6e9f90875.png" shape="circle" className={classes("avatar_1 avatar_1_1")}></IgrAvatar>
                    <div className={classes("column-layout text")}>
                      <h5 className={classes("content_1")}>
                        <span>Erin Brockovich</span>
                      </h5>
                      <p className={classes("typography__body-1 content_1")}>
                        <span>Water quality specialist</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout summary")}>
                    <div className={classes("row-layout summary_1")}>
                      <div className={classes("column-layout open-pto")}>
                        <div className={classes("column-layout group")}>
                          <p className={classes("typography__subtitle-2 open-pto_1")}>
                            <span>Open PTO</span>
                          </p>
                          <span className={classes("material-icons icon_2")}>
                            <span key={uuid()}>date_range</span>
                          </span>
                        </div>
                        <div className={classes("column-layout group_1")}>
                          <p className={classes("typography__body-2 open-pto_1")}>
                            <span>8.5 days used (YTD)</span>
                          </p>
                          <p className={classes("typography__caption open-pto_1")}>
                            <span>1 day scheduled</span>
                          </p>
                        </div>
                      </div>
                      <div className={classes("column-layout open-pto")}>
                        <p className={classes("typography__subtitle-2 open-pto_1")}>
                          <span>Bereavement leave</span>
                        </p>
                        <div className={classes("row-layout group_2")}>
                          <h6 className={classes("h6")}>
                            <span>0.0</span>
                          </h6>
                          <span className={classes("material-icons icon_3")}>
                            <span key={uuid()}>date_range</span>
                          </span>
                        </div>
                        <div className={classes("column-layout group_3")}>
                          <p className={classes("typography__body-2 open-pto_1")}>
                            <span>Days available</span>
                          </p>
                          <p className={classes("typography__caption open-pto_1")}>
                            <span>0 day scheduled</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={classes("row-layout actions")}>
                      <IgrButton type="button" className={classes("button_4 button_4_1")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>send</span>
                        </span>
                        <span key={uuid()}>request time off</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                      <IgrIconButton variant="flat" className={classes("button button_2")}>
                        <span className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>mail</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                  <div className={classes("column-layout actions")}>
                    <div className={classes("row-layout title_1")}>
                      <p className={classes("typography__subtitle-2 content_2")}>
                        <span>What's the buzz</span>
                      </p>
                    </div>
                    <IgrList className={classes("list")}>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/79697a81c543fd0f28c08f34cfac653976403343.png" shape="circle" className={classes("avatar avatar_3")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Ethan Hunt</div>
                        <div slot="subtitle" key={uuid()}>Birthday, Oct 1</div>
                        <span slot="end" className={classes("material-icons icon_5")} key={uuid()}>
                          <span key={uuid()}>cake</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/0ecd56ad55e9ea835b6923b49885f21b3e41a38f.png" shape="circle" className={classes("avatar avatar_4")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Luke Skywalker</div>
                        <div slot="subtitle" key={uuid()}>25th work-anniversary</div>
                        <span slot="end" className={classes("material-icons icon_5")} key={uuid()}>
                          <span key={uuid()}>flag</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/1737495fa8ec3f098d79abfbc023d06be0fd5af5.png" shape="circle" className={classes("avatar avatar_5")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Donnie Darko</div>
                        <div slot="subtitle" key={uuid()}>On vacations, Oct 10-23</div>
                        <span slot="end" className={classes("material-icons icon_5")} key={uuid()}>
                          <span key={uuid()}>beach_access</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/82823037f5532db28af8148c323c22706c7c230f.png" shape="circle" className={classes("avatar avatar_6")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Edna Mode</div>
                        <div slot="subtitle" key={uuid()}>Visiting customer</div>
                        <span slot="end" className={classes("material-icons icon_5")} key={uuid()}>
                          <span key={uuid()}>airplanemode_active</span>
                        </span>
                      </IgrListItem>
                    </IgrList>
                  </div>
                </div>
                <div className={classes("column-layout right")}>
                  <div className={classes("row-layout heading")}>
                    <p className={classes("typography__subtitle-2 content_2")}>
                      <span>What's happening at Rapid Fission Inc.</span>
                    </p>
                    <p className={classes("typography__subtitle-2 content_2")}>
                      <span>Announcements (1)</span>
                    </p>
                  </div>
                  <div className={classes("column-layout content-group")}>
                    <IgrList className={classes("list")}>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/7408f608188b677d4147ea32ec02abd7370e8ec6.png" shape="circle" className={classes("avatar avatar_7")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>George Bailey posted  an announcement, awards, and call for nominations</div>
                        <div slot="subtitle" key={uuid()}>19 days ago</div>
                        <span slot="end" className={classes("material-icons icon_5")} key={uuid()}>
                          <span key={uuid()}>clear</span>
                        </span>
                      </IgrListItem>
                    </IgrList>
                    <div className={classes("column-layout actions")}>
                      <div className={classes("row-layout title_2")}>
                        <p className={classes("typography__subtitle-2 my-benefits")}>
                          <span>MY BENEFITS</span>
                        </p>
                      </div>
                      <IgrList className={classes("list")}>
                        <IgrListItem key={uuid()}>
                          <div slot="start" key={uuid()}>
                            <IgrAvatar shape="circle" className={classes("avatar avatar_8")} key={uuid()}>
                              <span className={classes("material-icons icon_6")} key={uuid()}>
                                <span key={uuid()}>security</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title" key={uuid()}>Radiation protection health insurance plan</div>
                          <div slot="subtitle" key={uuid()}>$600 every other week</div>
                        </IgrListItem>
                        <IgrListItem key={uuid()}>
                          <div slot="start" key={uuid()}>
                            <IgrAvatar shape="circle" className={classes("avatar avatar_9")} key={uuid()}>
                              <span className={classes("material-icons icon_6")} key={uuid()}>
                                <span key={uuid()}>visibility</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title" key={uuid()}>20/20 Vision plans here</div>
                          <div slot="subtitle" key={uuid()}>$234 every other week</div>
                        </IgrListItem>
                        <IgrListItem key={uuid()}>
                          <div slot="start" key={uuid()}>
                            <IgrAvatar shape="circle" className={classes("avatar avatar_10")} key={uuid()}>
                              <span className={classes("material-icons icon_6")} key={uuid()}>
                                <span key={uuid()}>child_friendly</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title" key={uuid()}>Child care savings</div>
                          <div slot="subtitle" key={uuid()}>$4955 remaining</div>
                        </IgrListItem>
                        <IgrListItem key={uuid()}>
                          <div slot="start" key={uuid()}>
                            <IgrAvatar shape="circle" className={classes("avatar avatar_11")} key={uuid()}>
                              <span className={classes("material-icons icon_6")} key={uuid()}>
                                <span key={uuid()}>security</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title" key={uuid()}>Fire hazard protection  </div>
                          <div slot="subtitle" key={uuid()}>On da house!</div>
                        </IgrListItem>
                      </IgrList>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout footer")}>
                <p className={classes("typography__body-2 c-2020-rapid-fissi")}>
                  <span>(c) 2020 IndigoDesign Inc.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
