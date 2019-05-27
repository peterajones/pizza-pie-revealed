<script type="text/javascript">
                $(document).ready(function() {
                    var num_segments = 10;  // 10 pieces to the pie
                    var num_filled = num_segments - <xsl:value-of select="/output/card_info/visits_to_next_reward"/>;
                    var data_set = [];
                    for (var i = 1; i &lt;= num_segments; i++) {
                        var d = {
                            data: 100 / num_segments
                        };
                        if (i &lt;= num_filled) {
                            d.color = "#F98611";  // Filled in
                        } else {
                            d.color = "#FFFFFF";  // Blank
                        }
                        data_set.push(d);
                    }

                    $('#pie_chart').plot(data_set, {
                        series: {
                            pie: {
                                show: true,
                                stroke: {
                                    color: "#666666",
                                    width: 0.5
                                }
                            }
                        }
                    });
                });
            </script>