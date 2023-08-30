import { indexClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";

import type { HomeButtonUrl } from "@/types/common";

const books = ({ homeButtonUrl }: { homeButtonUrl: HomeButtonUrl }) => {
    return (
        <div className="center">
            <div>
                <HomeButton homeButtonUrl={homeButtonUrl} />
                <p>「Amplifyでフルスタックな開発体験をしよう」出版予定です！</p>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const index = await indexClient.get({ endpoint: "index" })

    return {
        props: {
            homeButtonUrl: index.homebutton.url,
        },
    };
};

export default books