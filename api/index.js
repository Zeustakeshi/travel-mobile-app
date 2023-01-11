import axios from "axios";

const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
    params: {
        latitude: "10.980434",
        longitude: "106.674485",
        limit: "30",
        currency: "USD",
        distance: "5",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
    },
    headers: {
        "X-RapidAPI-Key": "19b959d7acmsh3407f39df1a1d0ep1b70b8jsn58d79b5f6161",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
};

export const getPlaceData = async () => {
    try {
        const {
            data: { data },
        } = await axios.get(
            "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
            {
                params: {
                    latitude: "10.980434",
                    longitude: "106.674485",
                    limit: "30",
                    currency: "USD",
                    distance: "5",
                    open_now: "false",
                    lunit: "km",
                    lang: "en_US",
                },
                headers: {
                    "X-RapidAPI-Key":
                        "19b959d7acmsh3407f39df1a1d0ep1b70b8jsn58d79b5f6161",
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }

    // const res = await axios.request(options);
    // const data =

    // .then(function (response) {
    //     console.log(response.data);
    // })
    // .catch(function (error) {
    //     console.error(error);
    // });
};
