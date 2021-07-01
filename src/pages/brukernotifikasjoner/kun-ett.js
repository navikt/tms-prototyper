import {
  Alert,
  Panel,
  LinkPanel,
  Link,
  Title,
  Ingress,
  Detail,
  Label,
} from "@navikt/ds-react";
import styles from "../../components/linkpanels/Linkpanels.module.css";

const InfoIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 0C8.07339 0 0 8.07339 0 18C0 27.9266 8.07339 36 18 36C27.925 36 36 27.9266 36 18C36 8.07339 27.925 0 18 0Z"
      fill="#3386E0"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.3476 9.84783C20.3476 8.55183 19.2934 7.5 17.9997 7.5C16.7014 7.5 15.6519 8.55183 15.6519 9.84783C15.6519 11.1462 16.7014 12.1957 17.9997 12.1957C19.2934 12.1957 20.3476 11.1462 20.3476 9.84783ZM24.0284 27.0007C24.0284 26.1605 23.3088 25.5138 22.4632 25.5138H19.6161V16.5045C19.6161 15.6643 18.8966 15.0176 18.0509 15.0176H15.007C14.16 15.0176 13.4417 15.6641 13.4417 16.5045C13.4417 17.345 14.16 17.9915 15.007 17.9915H16.4857V25.5138H14.0867C13.2398 25.5138 12.5215 26.1602 12.5215 27.0007C12.5215 27.8412 13.2398 28.4877 14.0867 28.4877H22.4632C23.3088 28.4877 24.0284 27.841 24.0284 27.0007Z"
      fill="white"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3065 0.994141L17.9857 0.997271C13.1647 1.08178 8.62712 3.03013 5.21021 6.48397C1.76826 9.96284 -0.0802818 14.5168 0.00267561 19.3087C0.174851 29.2257 7.94624 36.9941 17.6945 36.9941L18.0123 36.991C28.1018 36.8173 36.1706 28.6013 35.9968 18.6812C35.8246 8.76409 28.0532 0.994141 18.3065 0.994141Z"
      fill="#FFAA33"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 9.69972C19.5 8.87129 18.8284 8.19971 18 8.19971C17.1716 8.19971 16.5 8.87129 16.5 9.69972V20.1999C16.5 21.0283 17.1716 21.6999 18 21.6999C18.8284 21.6999 19.5 21.0283 19.5 20.1999V9.69972ZM18.0002 29.201H18.0407C19.2804 29.1785 20.2726 28.1548 20.2501 26.9129C20.2276 25.6844 19.2264 24.7012 18.0002 24.7012C17.9935 24.7012 17.9867 24.7018 17.98 24.7024C17.9732 24.7029 17.9665 24.7035 17.9597 24.7035C16.7178 24.7237 15.7279 25.7497 15.7504 26.9916C15.7706 28.2201 16.7741 29.201 18.0002 29.201Z"
      fill="#262626"
    />
  </svg>
);
export default function KunEtt() {
  return (
    <section>
      <div className="lenkepaneler">
        <LinkPanel>
          <div className="box">
            <div className="icon">
              <WarningIcon></WarningIcon>
            </div>
            <div>
              <Title>
                Vi har registrert at du har blitt forelder. Gratulerer så mye!
              </Title>
              <Detail size="s">Frist: 06.08.2021 | Dagpenger</Detail>
              <Link>1 oppgave til</Link>
            </div>
          </div>
        </LinkPanel>
      </div>
      <div className="lenkepaneler">
        <LinkPanel>
          <div className="box">
            <div className="icon">
              <InfoIcon></InfoIcon>
            </div>
            <div>
              <Title>
                Vi mangler vedlegg for å kunne behandle søknaden din om
                dagpenger
              </Title>
              <Detail size="s">Frist: 06.08.2021 | Foreldrepenger</Detail>
              <Link>2 beskjeder til</Link>
            </div>
          </div>
        </LinkPanel>
      </div>
      <div className="lenkepaneler">
        <LinkPanel>
          <Title>Vis tidligere varlser</Title>
        </LinkPanel>
      </div>
      <style jsx>{`
        .lenkepaneler {
          margin-bottom: 1rem;
          width: 70%;
        }
        .box {
          display: flex !important;
        }
        .icon {
          padding-top: 0.5rem;
          padding-right: 1rem;
        }
      `}</style>
    </section>
  );
}
