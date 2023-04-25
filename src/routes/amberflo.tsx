import {
    AmberfloProvider,
    UsageByMeterLineGraph,
    UsageByMeterTable
    // import from 'components'
  } from "@amberflo/uikit/components";
  // Though the above imports work, instead of doing that
  // we suggest you to import components like this:
  // import { AmberfloProvider } from "@amberflo/uikit/components/molecules";
  // import { UsageByMeterLineGraph } from "@amberflo/uikit/components/organisms/UsageByMeterLineGraph";
  // import { UsageByMeterTable } from "@amberflo/uikit/components/organisms/UsageByMeterTable";

  // import "../styles/amberflo.css";

  export default function Amberflow() {
    return (
      <div className="wrapper">
        <AmberfloProvider
          session="9ecf2f723200142599489a317e8f317085fb9435a574701ba0239c0f4ed12399665418565dca457f4271"
          theme={{
            brandColor: "#3472FF",
            fontSize: 16
          }}
        >
          <UsageByMeterLineGraph graphTextColor='red' />
          <UsageByMeterTable />
        </AmberfloProvider>
      </div>
    );
  }
