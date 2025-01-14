import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectModule } from '@infragistics/igniteui-react';
import styles from './person.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function Person() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout person-container")}>
        <div className={classes("column-layout person")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout left")}>
              <h6 className={classes("rapid-fission-inc")}>
                <span>Rapid Fission Inc.</span>
              </h6>
              <div className={classes("row-layout buttons")}>
                <IgrButton variant="flat" type="button" className={classes("button_1 button_1_1")}>
                  <span key={uuid()}>Home</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" type="button" className={classes("button_1 button_1_2")}>
                  <span key={uuid()}>My info</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" disabled="true" type="button" className={classes("button_1 button_1_3")}>
                  <span key={uuid()}>People</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" disabled="true" type="button" className={classes("button_1 button_1_4")}>
                  <span key={uuid()}>My files</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <div className={classes("row-layout left")}>
              <IgrIconButton variant="flat" className={classes("button")}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <IgrAvatar src="/src/assets/b19ca11ab1662964f651cf3fe1b49fb6e9f90875.png" shape="circle" className={classes("avatar_1")}></IgrAvatar>
            </div>
          </div>
          <div className={classes("column-layout page-content")}>
            <div className={classes("row-layout header_1")}>
              <div className={classes("row-layout title")}>
                <div className={classes("row-layout avatar")}>
                  <IgrAvatar src="/src/assets/b19ca11ab1662964f651cf3fe1b49fb6e9f90875.png" shape="circle" className={classes("avatar_2")}></IgrAvatar>
                </div>
                <div className={classes("column-layout right")}>
                  <div className={classes("column-layout header_2")}>
                    <h4 className={classes("content_1")}>
                      <span>Erin Brockovich</span>
                    </h4>
                    <p className={classes("typography__subtitle-1 content_1")}>
                      <span>Water Quality Specialist</span>
                    </p>
                  </div>
                  <div className={classes("row-layout header_2")}>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_1")}>
                      <span key={uuid()}>Personal</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_2")}>
                      <span key={uuid()}>job</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_3")}>
                      <span key={uuid()}>time-off</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_4")}>
                      <span key={uuid()}>emergency</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_5")}>
                      <span key={uuid()}>documents</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_6")}>
                      <span key={uuid()}>benefits</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" type="button" className={classes("button_2 button_2_7")}>
                      <span key={uuid()}>pay info</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes("column-layout content-and-footer")}>
              <div className={classes("row-layout content")}>
                <div className={classes("row-layout information")}>
                  <div className={classes("column-layout left_1")}>
                    <div className={classes("column-layout hire-dates")}>
                      <p className={classes("typography__subtitle-2 hire-date")}>
                        <span>Hire Date</span>
                      </p>
                      <div className={classes("column-layout header_2")}>
                        <p className={classes("typography__body-2 feb-01-2010")}>
                          <span>Feb 01, 2010</span>
                        </p>
                        <p className={classes("typography__caption feb-01-2010")}>
                          <span>10y-10m-7d</span>
                        </p>
                      </div>
                    </div>
                    <div className={classes("column-layout hire-dates")}>
                      <div className={classes("row-layout waste-water")}>
                        <span className={classes("material-icons icon_1")}>
                          <span key={uuid()}>waves</span>
                        </span>
                        <p className={classes("typography__body-2 content_2")}>
                          <span>Waste water mgmt.</span>
                        </p>
                      </div>
                      <div className={classes("row-layout waste-water")}>
                        <span className={classes("material-icons icon_1")}>
                          <span key={uuid()}>business</span>
                        </span>
                        <p className={classes("typography__body-2 content_2")}>
                          <span>Nuclear Disposal</span>
                        </p>
                      </div>
                      <div className={classes("row-layout waste-water")}>
                        <span className={classes("material-icons icon_1")}>
                          <span key={uuid()}>place</span>
                        </span>
                        <p className={classes("typography__body-2 content_2")}>
                          <span>California, USA</span>
                        </p>
                      </div>
                    </div>
                    <div className={classes("column-layout manager")}>
                      <p className={classes("typography__subtitle-2 hire-date")}>
                        <span>Manager</span>
                      </p>
                      <div className={classes("row-layout waste-water")}>
                        <IgrAvatar src="/src/assets/1737495fa8ec3f098d79abfbc023d06be0fd5af5.png" shape="circle" className={classes("avatar_1")}></IgrAvatar>
                        <p className={classes("typography__body-2 donnie-darko")}>
                          <span>Donnie Darko</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes("column-layout right_1")}>
                    <div className={classes("row-layout personal")}>
                      <span className={classes("material-icons icon_2")}>
                        <span key={uuid()}>perm_contact_calendar</span>
                      </span>
                      <h6 className={classes("content_2")}>
                        <span>Personal</span>
                      </h6>
                    </div>
                    <div className={classes("column-layout form")}>
                      <div className={classes("column-layout group")}>
                        <p className={classes("typography__subtitle-1 feb-01-2010")}>
                          <span>Basic Information</span>
                        </p>
                        <div className={classes("column-layout group")}>
                          <div className={classes("row-layout group")}>
                            <IgrInput label="First name" placeholder="Erin" disabled="true" outlined="true" className={classes("user-input")}></IgrInput>
                            <IgrInput label="Middle name" placeholder="First name" disabled="true" outlined="true" className={classes("user-input")}></IgrInput>
                            <IgrInput label="Last name" placeholder="Brockovich" disabled="true" outlined="true" className={classes("user-input")}></IgrInput>
                          </div>
                          <div className={classes("row-layout group")}>
                            <IgrSelect outlined="true" label="Gender" placeholder="Female" className={classes("user-input")}></IgrSelect>
                            <IgrSelect outlined="true" label="Marital status" placeholder="Married" className={classes("user-input")}></IgrSelect>
                          </div>
                          <IgrInput label="Address *" placeholder="123 Wallaby Lane" outlined="true" className={classes("input")}></IgrInput>
                          <div className={classes("row-layout group")}>
                            <IgrInput label="City *" placeholder="Sacramento" outlined="true" className={classes("input_1")}></IgrInput>
                            <IgrInput label="State *" placeholder="CA" outlined="true" className={classes("input_2")}></IgrInput>
                            <IgrInput label="Zip/Postal Code *" placeholder="94203" outlined="true" className={classes("input_1")}></IgrInput>
                          </div>
                        </div>
                      </div>
                      <div className={classes("column-layout group")}>
                        <p className={classes("typography__subtitle-1 feb-01-2010")}>
                          <span>Contact</span>
                        </p>
                        <div className={classes("row-layout group")}>
                          <IgrInput placeholder="Home phone" outlined="true" className={classes("user-input")}>
                            <span slot="prefix" key={uuid()}>
                              <span className={classes("material-icons icon_3")} key={uuid()}>
                                <span key={uuid()}>home</span>
                              </span>
                            </span>
                          </IgrInput>
                          <IgrInput placeholder="Work phone" outlined="true" className={classes("user-input")}>
                            <span slot="prefix" key={uuid()}>
                              <span className={classes("material-icons icon_3")} key={uuid()}>
                                <span key={uuid()}>business</span>
                              </span>
                            </span>
                          </IgrInput>
                          <IgrInput placeholder="Mobile phone" outlined="true" className={classes("user-input")}>
                            <span slot="prefix" key={uuid()}>
                              <span className={classes("material-icons icon_3")} key={uuid()}>
                                <span key={uuid()}>person</span>
                              </span>
                            </span>
                          </IgrInput>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout footer")}>
                <p className={classes("typography__body-2 c-2020-indigo-design-inc")}>
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
