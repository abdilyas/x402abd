import { describe, it, expect } from "vitest";
import { selectPaymentRequirements } from "./selectPaymentRequirements";
import { PaymentRequirements } from "../types";

describe("selectPaymentRequirements", () => {
  it("should not mutate the input array", () => {
    const requirements: PaymentRequirements[] = [
      {
        scheme: "exact",
        network: "iotex",
        maxAmountRequired: "1",
        resource: "res1",
        description: "d",
        mimeType: "application/json",
        payTo: "0x1111111111111111111111111111111111111111",
        maxTimeoutSeconds: 1,
        asset: "0x1111111111111111111111111111111111111111",
      },
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "1",
        resource: "res2",
        description: "d",
        mimeType: "application/json",
        payTo: "0x2222222222222222222222222222222222222222",
        maxTimeoutSeconds: 1,
        asset: "0x2222222222222222222222222222222222222222",
      },
    ];
    const original = requirements.map(r => ({ ...r }));
    const selected = selectPaymentRequirements(requirements);
    expect(selected).toEqual(requirements[1]);
    expect(requirements).toEqual(original);
  });
});
