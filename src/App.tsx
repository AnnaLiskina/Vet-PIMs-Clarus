import { useState } from "react";
import VetPiMsScreen from "../imports/index";
import LoginScreen from "./LoginScreen";
import LoginScreenProcessing from "./LoginScreenProcessing";
import PolicySearchDefault, { type PolicySearchValues } from "./PolicySearchDefault";
import PolicySearchLoading from "./PolicySearchLoading";
import NoPolicyFound from "./NoPolicyFound";
import PolicyFound from "./PolicyFound";
import TreatmentCondition from "./TreatmentCondition";
import ReviewAndSubmit from "./ReviewAndSubmit";
import SubmittingProcess from "./SubmittingProcess";
import FinalScreen from "./FinalScreen";

type Screen = "vetpims" | "login" | "processing" | "policysearch" | "searching" | "nopolicyfound" | "policyfound" | "treatment" | "reviewandsubmit" | "submitting" | "finalscreen";

const FRAME_W = 1440;
const FRAME_H = 907;

const initialSearchValues: PolicySearchValues = {
  clientName: "",
  address: "",
  policyNumber: "",
  insurer: "",
  petName: "",
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
      }}
    >
      <div
        style={{
          position: "relative",
          width: FRAME_W,
          height: FRAME_H,
          overflowX: "hidden",
          overflowY: "auto",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("vetpims");
  const [searchValues, setSearchValues] = useState<PolicySearchValues>(initialSearchValues);

  if (screen === "finalscreen") {
    return (
      <Frame>
        <FinalScreen
          onClose={() => {
            setSearchValues(initialSearchValues);
            setScreen("policysearch");
          }}
        />
      </Frame>
    );
  }

  if (screen === "submitting") {
    return (
      <Frame>
        <SubmittingProcess onDone={() => setScreen("finalscreen")} />
      </Frame>
    );
  }

  if (screen === "reviewandsubmit") {
    return (
      <Frame>
        <ReviewAndSubmit
          onGoBack={() => setScreen("treatment")}
          onSubmit={() => setScreen("submitting")}
        />
      </Frame>
    );
  }

  if (screen === "treatment") {
    return (
      <Frame>
        <TreatmentCondition
          onGoBack={() => setScreen("policyfound")}
          onReview={() => setScreen("reviewandsubmit")}
        />
      </Frame>
    );
  }

  if (screen === "policyfound") {
    return (
      <Frame>
        <PolicyFound
          onBackToSearch={() => setScreen("policysearch")}
          onCreateClaim={() => setScreen("treatment")}
        />
      </Frame>
    );
  }

  if (screen === "nopolicyfound") {
    return (
      <Frame>
        <NoPolicyFound onBackToSearch={() => setScreen("policysearch")} />
      </Frame>
    );
  }

  if (screen === "searching") {
    return (
      <Frame>
        <PolicySearchLoading onDone={() => setScreen("policyfound")} />
      </Frame>
    );
  }

  if (screen === "policysearch") {
    const isEmpty = Object.values(searchValues).every((v) => v.trim() === "");
    return (
      <Frame>
        <PolicySearchDefault
          values={searchValues}
          onChange={setSearchValues}
          onSearch={() => setScreen(isEmpty ? "nopolicyfound" : "searching")}
        />
      </Frame>
    );
  }

  if (screen === "processing") {
    return (
      <Frame>
        <LoginScreenProcessing onDone={() => setScreen("policysearch")} />
      </Frame>
    );
  }

  if (screen === "login") {
    return (
      <Frame>
        <LoginScreen onSignIn={() => setScreen("processing")} />
      </Frame>
    );
  }

  return (
    <Frame>
      <div className="relative size-full">
        <VetPiMsScreen />
        <div
          className="absolute left-[64px] top-[578px] w-[88px] h-[82px] rounded cursor-pointer hover:bg-white/10"
          onClick={() => setScreen("login")}
          role="button"
          aria-label="Clarus"
        />
      </div>
    </Frame>
  );
}
