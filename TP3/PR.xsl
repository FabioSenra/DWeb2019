<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Project Record</title>
                <meta charset="UTF8"></meta>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>
            <body>
                <h1 align="center">Project Record</h1>
                
                <xsl:apply-templates/>
                
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="metadata">
        <hr/>
        <table class="w3-table">
            <tr>
                <td>
                    <th>Key-name</th><td><xsl:value-of select="keyname"/></td>
                </td>
                <td>
                    <th>Begin date:</th><td><xsl:value-of select="bdate"/></td>
                </td>
            </tr>
            <tr>
                <td>
                    <th>Title</th><td><xsl:value-of select="title"/></td>
                </td>
                <td>
                    <th>End date:</th><td><xsl:value-of select="edate"/></td>
                </td>
            </tr>
            <tr>
                <td>
                    <th>Subtitle</th><td><xsl:value-of select="subtitle"/></td>
                </td>
                <td>
                    <th>Supervisor</th><td><a href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>
                </td>
            </tr>
        </table>
        <hr/>
    </xsl:template>
    
    <xsl:template match="workteam">
        <hr/>
            <ol>
            <xsl:for-each select="worker">
            <li>
                <xsl:value-of select="name"/> - <xsl:value-of select="identifier"/>
                <p><a href="{email}"><xsl:value-of select="email"/></a></p>
                <p><a href="{git}"><xsl:value-of select="git"/></a></p>
            </li>
            </xsl:for-each>
            </ol>
        <hr/>
    </xsl:template>
    
    <xsl:template match="abstract">
        <hr/>
        <h3>Abstract:</h3>
        <xsl:for-each select="p">
            <xsl:apply-templates/> <br/>
        </xsl:for-each>
        <hr/>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/> </b>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/> </i>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:apply-templates/> </u>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <hr/>
        <h3>Deliverables:</h3>
        <ul class="w3-ul w3-grey">
        <xsl:for-each select="deliverable">
            <li><a href="{@path}"><xsl:value-of select="."/></a></li>
        </xsl:for-each>
        </ul>
        <hr/>
    </xsl:template>
    
</xsl:stylesheet>