import { LCDClient } from "@terra-money/terra.js";
import { useConnectedWallet } from "@terra-money/wallet-provider";
import React, { useEffect, useMemo, useState } from "react";

// TODO: Pull this in from artifacts.
const CONTRACT_ADDRESS = "terra18eezxhys9jwku67cm4w84xhnzt4xjj77w2qt62";

export function QuerySample() {
  const connectedWallet = useConnectedWallet();

  const [count, setCount] = useState<null | number>();

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      return null;
    }

    return new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    });
  }, [connectedWallet]);

  useEffect(() => {
    const update = () => {
      if (connectedWallet && lcd) {
        lcd.wasm
          .contractQuery(CONTRACT_ADDRESS, {
            get_count: {},
          })
          .then((re: any) => {
            setCount(typeof re.count !== "undefined" ? re.count : 0);
          });
      }
    };
    if (connectedWallet && lcd) {
      update();
    } else {
      setCount(0);
    }

    let updateInterval = setInterval(() => {
      update();
    }, 500);

    //Clean up can be done like this
    return () => {
      clearInterval(updateInterval);
    };
  }, [connectedWallet, lcd]);

  return (
    <div>
      <h2>Current Count</h2>
      {count && <pre>{count}</pre>}
    </div>
  );
}
