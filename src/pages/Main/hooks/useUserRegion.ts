import { useEffect, useState } from "react";

export function useUserRegion(): { region: string; isFallback: boolean } {
    const [region, setRegion] = useState<string>("부산");
    const [isFallback, setIsFallback] = useState(false);

    useEffect(() => {
        if (!navigator.geolocation) {
            setIsFallback(true);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                    );
                    const data = await res.json();
                    const address = data.address;

                    const regionName =
                        address.state || address.city || address.town || address.county;

                    const matchedRegion = [
                        "서울",
                        "부산",
                        "인천",
                        "대구",
                        "광주",
                        "대전",
                        "울산",
                        "세종",
                        "경기",
                        "강원",
                        "제주",
                    ].find((r) => regionName.includes(r));

                    if (matchedRegion) {
                        setRegion(matchedRegion);
                    } else {
                        setIsFallback(true);
                    }
                } catch {
                    setIsFallback(true);
                }
            },

            () => {
                setIsFallback(true);
            },
        );
    }, []);

    return { region, isFallback };
}

export default useUserRegion;
