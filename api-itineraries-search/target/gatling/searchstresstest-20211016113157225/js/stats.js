var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1380",
        "ok": "1380",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles2": {
        "total": "899",
        "ok": "899",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.556",
        "ok": "0.556",
        "ko": "-"
    }
},
contents: {
"req_get--api-flight-80af8": {
        type: "REQUEST",
        name: "GET /api/flights/itineraries-search/itineraries",
path: "GET /api/flights/itineraries-search/itineraries",
pathFormatted: "req_get--api-flight-80af8",
stats: {
    "name": "GET /api/flights/itineraries-search/itineraries",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1380",
        "ok": "1380",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles2": {
        "total": "899",
        "ok": "899",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.556",
        "ok": "0.556",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
