/**
 * ########  ####      ####  ###      ###  ##########
 * ##        #####    #####   ###    ###       ##
 * ##        ## ###  ### ##    ###  ###        ##
 * ########  ##  ######  ##     ######         ##
 * ##        ##   ####   ##    ###  ###        ##
 * ##        ##          ##   ###    ###       ##
 * ########  ##          ##  ###      ###  ##########
 *  https://emxi.github.io
 *      ____
 *      |
 *      |--+--\
 *      |  |  |
 *     fivnex.co
 * 
 * #########################################################################################################
 * #########################################################################################################
 * License:
 * BSD 3-Clause License
 *
 * Copyright (c) 2020, EMXI developers & Fivnex.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * ================================================================================
 * 
 * Developer credits and emails
 * ##############################################
 * ##############################################
 * #### DO NOT CONTACT FOR SUPPORT WITH THIS ####
 * #### SOFTWARE!  COMMUNITY SUPPORT  IS THE ####
 * #### MAIN SUPPORT LINE AS THESE DEVELOPE- ####
 * #### -RS OFTEN  WORK UNDER SEVERAL  LARGE ####
 * #### SCALE PROJECTS! Thank you for under- ####
 * #### standing. <3 - Fivnex!               ####
 * ##############################################
 * ##############################################
 * (Contact people for press releases or general feedback of this software only)
 * 
 * +--------------+-------------------+-------------------------+-----------------------+
 * | Kai Lyons    | Lead Developer    | BUSINESS: kai@fivnex.co | WEB: kailikeslinux.io |
 * +--------------+-------------------+-------------------------+-----------------------+
 * 
 * #########################################################################################################
 * #########################################################################################################
 */


/**
 * #====================#
 * # EMXI Functionality #
 * #====================#
 * 
 * (The basics to EMXI to make the code easier to work with)
 */

 // checkTime for core.getTime();
 function checkTime(i) {
    if (i < 10) {i = "0" + i}; // Add 0's to time numbers < 10
    return i;
 }

/**
 * #==============#
 * # Core options #
 * #==============#
 * 
 * Most people will use these options in every day websites.
 */

const core = {
    getDate: function(tag){
        var date = new Date()
        if (!tag.startsWith("#")){
            document.getElementById(tag).innerHTML = date;
        } else {
            console.error("ERROR! ID MUST NOT start with #!");
        }
    },
    getTime: function(tag){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        document.getElementById(tag).innerHTML = hours + ":" + minutes + ":" + seconds;
        setTimeout(core.getTime, 500);
    }
}